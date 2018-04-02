package space.qmen.lot.model.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Order {
    private Long id;
    private Integer orderType;
    private Long fRentingStatusId;

    private String orderDescription;
    private Long fRenterId;
    private Long fOwnerId;
    private Long fSpaceId;
    private String fSpaceInfo;
    private Long fVehicleId;
    private Long fCommunityId;
    private Double unitPrice;
    private Double duration;
    private Double timeoutUnitPrice;
    private Double timeoutDuration;

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
