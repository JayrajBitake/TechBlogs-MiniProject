package com.jb.techblogs.services;

import java.util.List;

import java.util.Optional;

import org.apache.logging.log4j.message.AsynchronouslyFormattable;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.jb.techblogs.dao.UserInfoDao;

import com.jb.techblogs.model.UserInfo;
@Service

public class UserInfoServiceImpl implements UserInfoService{
	@Autowired
	private UserInfoDao userInfoDao;
	private UserInfo ui;
	@Override
	public void add(UserInfo userinfo) {
		userInfoDao.save(userinfo);
		
	}

	@Override
	public void modify(UserInfo userinfo) {
		userInfoDao.save(userinfo);
		
	}

	@Override
	public void removeById(int id) {
		userInfoDao.deleteById(id);
		
	}

	@Override
	public UserInfo getById(int id) {
		Optional<UserInfo> opt = userInfoDao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	
	public UserInfo loadUserByUsername(String username,String pass) {
		try {
			UserInfo ui=new UserInfo();
			
			ui=userInfoDao.selectByName(username,pass);
			System.out.println(ui.getUsername());
			
		
		return ui;
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}


//	   @Override 
//	   public UserInfo loadUserByUsername(String username) 
//	   throws UsernameNotFoundException { 
//	      UserInfo user = userInfoDao.findUserByUsername(username) 
//	         .orElseThrow(() -> new UsernameNotFoundException("User not present")); 
//	         return user; 
//	   } 
//	   public void createUser(UserInfo user) { 
//		   userInfoDao.save((UserInfo) user); 
//	   }

	
//	@Override
//	public List<UserInfo> getAllByName(String username) {
//		
//		 return userInfoDao.findByName(username);
//	}

	
}


