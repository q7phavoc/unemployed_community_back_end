const { Board } = require("../models");

exports.boardList = async (req, res) => {
  const limit = req.query.limit ? req.query.limit : 10;
  const offset = req.query.offset ? req.query.offset : 0;

  const totalCountByCategory = await Board.count({
    where: {
      board_category: decodeURIComponent(req.query.category)
    },
  });

  console.log('Total number of boards in SomeCategory:', totalCountByCategory);

  Board.findAll({
    where: {
      board_category: decodeURIComponent(req.query.category)
    },
    limit: Number(limit),
    offset: Number(offset)
  })
  .then(boards => {
    res.json({"boards": boards, "total": totalCountByCategory});
  })
  .catch(err => {
    console.error(err);
  });
};

exports.boardDetail = (req, res) => {
  Board.findOne({
    where: {
      id: decodeURIComponent(req.params.id)
    }
  })
  .then(boards => {
    res.json(boards);
  })
  .catch(err => {
    console.error(err);
  });
};

exports.boardCreate = (req, res) => {
  const { title, contents, board_category, writer_id } = req.body;

  try {
    // Create a new post in the database
    const newPost = Board.create({
      title,
      contents,
      board_category,
      writer_id,
      comment_count: 0,
      view_count: 0,
    });

    // Respond with the created post
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create post' });
  }
}

exports.boardUpdate = async (req, res) => {
  const { id } = req.params; // Get the ID from URL params
  const { title, contents, board_category, writer_id } = req.body; // Get data from request body

  // Validate input
  if (!title || !contents || !board_category) {
    return res.status(400).json({ message: '제목, 내용, 카테고리는 필수입니다.' });
  }

  try {
    // Find the post by ID
    const post = await Board.findByPk(id);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }

    // Update the post
    post.title = title;
    post.contents = contents;
    post.board_category = board_category;
    post.writer_id = writer_id; // Optional, only if you want to change the writer_id

    // Save the updated post
    await post.save();

    // Return the updated post
    return res.status(200).json(post);
  } catch (error) {
    console.error('Error updating board:', error);
    return res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
}