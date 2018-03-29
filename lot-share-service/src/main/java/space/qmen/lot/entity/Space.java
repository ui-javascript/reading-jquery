package space.qmen.lot.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class Space {
    private Long id;
    private String name;
    private Double spaceArea; // 车位面积
    private Integer level;
    private Double score;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
