package space.qmen.lot.model.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class Space {
    private Long id;
    // 车位编码
    private String code;
    private String name;
    // 车位面积
    private Double spaceArea;
    private Integer level;
    private Double score;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
