package space.qmen.lot.model.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class PayBank {
    private Long id;
    private Long accountAlipayId;
    private Long fUserId;
    private Long bankCode;
    private String bankName;
    private String idCard;
    private String tel;
    private String authPassword;
    private String passwordSalt;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer status;
}
