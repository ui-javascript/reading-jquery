package space.qmen.lot.model.param;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class SpaceAvailableParam {

    private Date dateBegin;
    private Date dateEnd;

    // 租用类型
    private long periodType;
}
