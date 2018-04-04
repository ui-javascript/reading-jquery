package space.qmen.lot.model.param;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class SpaceDayRentingStatusParam {
    private Date date;
    private Long spaceId;
}
