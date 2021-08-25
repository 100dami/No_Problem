## sequelize 를 이용한 Mysql - CRUD 구현

### Create
``` 
models.테이블명.create(데이터)
```

### Read
``` 
models.테이블명.findAll(조회조건)
models.테이블명.findByPk(primary key)
models.테이블명.findOne(조회조건)
```

### Update
``` 
models.테이블명.update(데이터, 조회조건)
```

### Delete
``` 
models.테이블명.destroy(조회조건)
```

### MVC ?