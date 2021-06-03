import React, { useEffect } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: 'none', tags: post?.tags.join(',') })
      );
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <div className={classes.loadingPaper}>
        <CircularProgress size='7em' />
      </div>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <>
      <Paper
        style={{
          padding: '10px',
          borderRadius: '15px',
          width: '40%',
          margin: '0px auto',
        }}
        elevation={6}
      >
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant='h3' component='h2'>
              {post.title}
            </Typography>
            <Typography
              gutterBottom
              variant='h6'
              color='textSecondary'
              component='h2'
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              {post.message}
            </Typography>
            <Typography variant='h6'>Created by: {post.name}</Typography>
            <Typography variant='body1'>
              {moment(post.createdAt).fromNow()}
            </Typography>

            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                post.selectedFile ||
                'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
              }
              alt={post.title}
            />
          </div>
        </div>
      </Paper>

      {recommendedPosts.length ? (
        <div className={classes.section}>
          <Typography gutterBottom variant='h5' style={{ fontWeight: '600' }}>
            You might also like:
          </Typography>
          <Divider />
          <Paper
            style={{
              padding: '10px',
              borderRadius: '15px',
              width: 'fit-content',
              margin: '20px 0px 50px',
            }}
            elevation={6}
          >
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(
                ({ title, name, message, likes, selectedFile, _id }) => (
                  <Paper
                    style={{
                      padding: '10px',
                      borderRadius: '15px',
                      width: 'fit-content',
                      margin: '20px',
                    }}
                    elevation={6}
                    onClick={() => openPost(_id)}
                    key={_id}
                  >
                    <Typography gutterBottom variant='h6'>
                      {title}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2'>
                      {name}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2'>
                      {message}
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      Likes: {likes.length}
                    </Typography>
                    <img
                      className={classes.recommendedPosts__image}
                      src={selectedFile}
                      style={{
                        width: '204px',
                        margin: '0px auto',
                        borderRadius: '8px',
                      }}
                    />
                  </Paper>
                )
              )}
            </div>
          </Paper>
        </div>
      ) : null}
    </>
  );
};

export default Post;
