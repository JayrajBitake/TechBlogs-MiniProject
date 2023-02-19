package com.jb.techblogs.cntroller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jb.techblogs.model.Post;
import com.jb.techblogs.services.PostService;
import com.jb.techblogs.model.UserInfo;

import com.jb.techblogs.services.UserInfoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PostController {
	@Autowired
	private UserInfoService userInfoService;
	
	@Autowired
	private PostService postService;
	@PostMapping(value = {"/post"}) 
	public String postAdd(@RequestBody Post post) {
		postService.add(post);
		return "success";
	}
	@DeleteMapping(value = {"/post/{id}"})
	public String postDelete1(@PathVariable int id) {
		
		postService.removeById(id);
		return "success";
	}
	@PutMapping(value = {"/post"})
	public String postUpdate(@RequestBody Post post) {
		postService.modify(post);
		return "success";
	}
	@GetMapping(value = {"/post"})
	public List<Post> postList(){
		return postService.getAll();
	}
	
	@GetMapping(value = {"/post/{title}"})
	public List<Post> postListByName(@PathVariable String title){
		return postService.getAllBytitle(title);
	}
	
	
	@PostMapping(value = {"/createuser"}) 
	public String userAdd(@RequestBody UserInfo userinfo ) {
		
		userInfoService.add(userinfo);
		return "success";
	}
	
	@GetMapping(value = {"/user/login/{username}/{pass}"})
	public UserInfo userLogin(@PathVariable String username,@PathVariable String pass){
		return userInfoService.loadUserByUsername(username,pass);
	}

}
