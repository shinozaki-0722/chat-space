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


  -# .Side-bar__GroupList
  -#   - current_user.groups.each do |group|
  -#     .Side-bar__GroupList__Group
  -#       = link_to group_messages_path(group) do
  -#         .Side-bar__GroupList__Group__GroupName
  -#           = group.name
  -#         .Side-bar__GroupList__Group__GroupMessage
  -#           = group.show_last_message



      -# .ChatMain__MessageField__MessageBox__MessageInfo
      -#   .ChatMain__MessageField__MessageBox__MessageInfo__Name
      -#     masa
      -#   .ChatMain__MessageField__MessageBox__MessageInfo__Date
      -#     2020/06/30
      -# .ChatMain__MessageField__MessageBox__Message
      -#   こんにちは

  -# .Chat-Main__Footer
  -#   .Chat-Main__Footer__Form
  -#     %input{type: "text", class: "Chat-Main__Footer__Form__text-form", placeholder: "type a message"}
  -#     %label{class: "Chat-Main__Footer__Form__Image"}
  -#       =icon('fas', 'image')
  -#       %input{type: "file", class: "Chat-Main__Footer__Form__Image__file"}
  -#   %input{type: "submit", class: "Chat-Main__Footer__Form__submit-btn", value: "Send"}

      -# .Chat-Main__Footer
      -#   = form_with model: [@group, @message], html: {class: "Form"}, local: true do |f|
      -#     .Chat-Main__Footer__Form
      -#       = f.text_field :content, class: 'Chat-Main__Footer__Form__text-form', placeholder: 'type a message'
      -#       = f.label :image, class: 'Chat-Main__Footer__Form__Image' do
      -#         =icon('fas', 'image')
      -#          = f.file_field :image, class: 'Chat-Main__Footer__Form__Image__file'
      -#     = f.submit 'Send', class: 'Chat-Main__Footer__Form__submit-btn'