# ChatSpace DB設計

## usersテーブル
|Columm|Type|Option|
|------|----|------|
|name|string|null: false, unique true|
|email|string|null: false, unipue: true|
|password|string|null: false|
### Association
- has_many :groups
- has_many :posts

## groupsテーブル
|Columm|Type|Option|
|------|----|------|
|groupname|string|null: false|
|member|string|null: false|
|user_id|integer|null: false|
### Association
- has_many :users

## postsテーブル
|Columm|Type|Option|
|------|----|------|
|text|text|null: false|
|image|string|null: false|
|user_id|integer|null: false|
|group_id|integer|null: false|
### Association
- belongs_to: users

## users_postsテーブル
|Collum|Type|Option|
|------|----|------|
|user_id|integer|null: false|
|post_id|integer|null: false|
### Association
- belongs_to :user
- belongs_to :posts