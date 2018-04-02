package space.qmen.lot.model.param;

import lombok.Data;

import java.sql.Date;

@Data
public class SpaceAvailableParam {

    private Date date;

    // 租用类型
    private long periodType;
}
