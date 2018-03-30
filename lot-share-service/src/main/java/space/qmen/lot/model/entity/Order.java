package space.qmen.lot.model.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class Order {
    private Long id;
    private Integer orderType;
    private String orderDescription;
    private Long fRenterId;
    private String fRenterName;
    private Long fOwnerId;
    private String fOwnerName;
    private Long fSpaceId;
    private String fSpaceInfo;
    private Long fCommunityId;
    private Double unitPrice;
    private Double duration;
    private Double expectedPayment;
    private Double reduction;
    private String reductionDescription;
    private Double prePayment;
    private Long fPrePaymentBillId;
    private Double actualPayment;
    private Long fActualPaymentBillId;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer status;
}
