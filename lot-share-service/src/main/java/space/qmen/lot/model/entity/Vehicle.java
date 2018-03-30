package space.qmen.lot.model.entity;


import lombok.Data;
import space.qmen.lot.model.dto.BaseDTO;

import java.sql.Date;

@Data
public class Vehicle extends BaseDTO {
    private Long id;
    private Integer vehicleType;
    private String plateNum;
    private Integer color;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
