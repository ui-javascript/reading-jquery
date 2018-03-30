package space.qmen.lot.model.dto;

import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Data
public class OwnerOrderDTO {
    private Date date;
    private Integer periodType;
    private String  renterName;
    private String icon;
    private String communityName;
    private String spaceCode;
    private Time morningBeginTime;
    private Time morningEndTime;
    private Time afternoonBeginTime;
    private Time afternoonEndTime;
    private String plateNum;
    private Double actualPayment;
    private Double timeoutPayment;
    private Double duration;
    private Integer orderStatus;
}
