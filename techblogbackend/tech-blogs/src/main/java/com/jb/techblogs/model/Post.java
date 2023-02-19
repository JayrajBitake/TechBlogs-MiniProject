package com.jb.techblogs.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Post {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int  postId;
		private String title;
		@Column(length=10000)
		private String content;
		
		private String imageName;
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		private String date;
		public int getPostId() {
			return postId;
		}
		public void setPostId(int postId) {
			this.postId = postId;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getContent() {
			return content;
		}
		public void setContent(String content) {
			this.content = content;
		}
		
		public String getImageName() {
			return imageName;
		}
		public void setImageName(String imageName) {
			this.imageName = imageName;
		}
		

}
