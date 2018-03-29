package space.qmen.lot.entity.rbac;

import lombok.Data;

import java.sql.Date;

@Data
public class Role {
    private Long id;
    private String roleName;
    private String description;
    private Date gmtCreate;
    private Long fCreateBy;
    private Date gmtModified;
    private Long fModifiedBy;
    private Integer isDeleted;
}
