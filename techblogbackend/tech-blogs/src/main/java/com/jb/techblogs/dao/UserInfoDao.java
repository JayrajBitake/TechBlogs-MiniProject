package com.jb.techblogs.dao;

import java.util.List;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.jb.techblogs.model.*;

@Repository
public interface UserInfoDao extends JpaRepository<UserInfo,Integer>{
//	@Query(value = "select p from user_info p where p.username = :username")
//	public List<UserInfo> findByName(@Param(value = "username") String username);
	@Query(value = "select b from UserInfo b where b.username = :username and b.pass = :pass")
	public UserInfo selectByName(@Param(value = "username") String username,@Param(value = "pass") String pass);
	
}
