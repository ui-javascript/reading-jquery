package space.qmen.lot.entity.payment;

import java.sql.Date;

public class PayWechat {
    private Long id;
    private Long accountWechatId;
    private Long fUserId;
    private String tel;
    private String authPassword;
    private String passwordSalt;
    private Date gmtCreate;
    private Date getModified;
    private Integer status;
}
