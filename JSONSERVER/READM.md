//获取所有用户信息
http://localhost:3000/users

//获取单个用户信息
http://localhost:3000/users/1

//获取公司的所有信息
http://localhost:3000/componies

//获取单个公司的信息
http://localhost:3000/componies/1

//公司所有ID为3的用户信息
http://localhost:3000/companies/3/users

//根据公司名称获取信息
http://localhost:3000/companies?name=Apple

//根据多个公司名称获取信息
http://localhost:3000/companies?name=Apple&name=三邻桥

//获取1页中只有2条的数据
http://localhost:3000/companies?_page=1&_limit=2

//升序排序（asc升序 desc降序）
http://localhost:3000/companies?_sort=name&_order=asc

//获取年纪为40的用户信息
http://localhost:3000/users?age_gte=40

//搜索用户信息
http://localhost:3000/users?q=k