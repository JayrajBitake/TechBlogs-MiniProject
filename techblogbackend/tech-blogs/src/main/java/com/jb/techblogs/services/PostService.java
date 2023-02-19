package com.jb.techblogs.services;

import java.util.List;

import com.jb.techblogs.model.Post;

public interface PostService {
	void add(Post post);
	void removeById(int id);
	void modify(Post post);
	List<Post> getAll();
List<Post> getAllBytitle(String title);

}
