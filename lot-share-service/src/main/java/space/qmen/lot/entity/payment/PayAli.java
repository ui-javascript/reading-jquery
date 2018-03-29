package space.qmen.lot.entity.payment;

import lombok.Data;

import java.sql.Date;

@Data
public class PayAli {
    private Long id;
    private Long accountAlipayId;
    private Long fUserId;
    private String tel;
    private String authPassword;
    private String passwordSalt;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer status;
}
