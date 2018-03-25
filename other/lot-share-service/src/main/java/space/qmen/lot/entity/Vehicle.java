package space.qmen.lot.entity;


import lombok.Data;

import java.sql.Date;

@Data
public class Vehicle extends Base {
    private Long id;
    private Integer vehicleType;
    private String plateNum;
    private Integer color;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
