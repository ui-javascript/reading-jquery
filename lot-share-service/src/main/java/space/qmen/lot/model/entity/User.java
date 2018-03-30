package space.qmen.lot.model.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class User {
    private Long id;
    private String realName;
    private String tel;
    private String idCard;
    private String password;
    private String passwordSalt;
    private String nickName;
    private Integer gender;
    private String icon;
    private String email;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;

    private Integer isOwner;
    private Integer isRenter;
    private Integer isAdmin;
    private Integer isDeleted;
}
