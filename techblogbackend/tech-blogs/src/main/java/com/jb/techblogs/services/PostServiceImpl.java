package com.jb.techblogs.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jb.techblogs.dao.PostDao;
import com.jb.techblogs.model.Post;
@Service
public class PostServiceImpl implements PostService {
	
	
	@Autowired
	private PostDao postDao;
public void add(Post post) {
		postDao.save(post);		
	}
@Override
public void removeById(int id) {
	postDao.deleteById(id); 
	
}
@Override
public void modify(Post post) {
postDao.save(post);
	
}
@Override
public List<Post> getAll() {
	Iterable<Post> itr = postDao.findAll();
	List<Post> lst = new ArrayList<Post>();
	itr.forEach(ele->lst.add(ele));
	return lst;
}
@Override
public List<Post> getAllBytitle(String title) {
	return postDao.findByName(title);
}

}
