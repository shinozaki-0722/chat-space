# ChatSpace DB設計

## usersテーブル
|Columm|Type|Option| 
|------|----|------|
|name|string|null: false, unique: true|
|email|string|null: false, unipue: true|
|password|string|null: false|
### Association
- has_many :groups, through: :groups_users
- has_many :posts
- has_many :groups_users

## groupsテーブル
|Columm|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :posts
- has_many :groups_users

## postsテーブル
|Columm|Type|Option|
|------|----|------|
|text|text||
|image|string||
|user_id|integer|null: false, foreign_key:true|
|group_id|integer|null: false foreign_key:true|
### Association
- belongs_to: user
- belongs_to: group

## groups_usersテーブル
|columm|Type|Option|
|------|----|------|
|group_id|integer|null: false, foreign_key:true|
|user_id|integer|null: false, foreign_key:true|
### Association
- belongs_to: user 
- belongs_to: group