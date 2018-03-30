package space.qmen.lot.model.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class Zone {
    private Long id;
    private String name;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
