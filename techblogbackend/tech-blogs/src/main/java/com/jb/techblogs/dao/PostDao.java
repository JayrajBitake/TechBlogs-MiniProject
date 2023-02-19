package com.jb.techblogs.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jb.techblogs.model.Post;
@Repository
public interface PostDao extends JpaRepository<Post, Integer> {
	@Query(value = "select title from Post title where title.title = :title")
public List<Post> findByName(@Param(value = "title") String title);

}
