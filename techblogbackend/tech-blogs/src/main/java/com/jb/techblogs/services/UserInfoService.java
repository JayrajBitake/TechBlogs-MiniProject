package com.jb.techblogs.services;

import java.util.List;

import java.util.Optional;

import com.jb.techblogs.model.*;

public interface UserInfoService {
	void add(UserInfo userinfo);
	void modify(UserInfo userinfo);
	void removeById(int id);
	UserInfo getById(int id);
	UserInfo loadUserByUsername(String username,String pass); 
	
}
