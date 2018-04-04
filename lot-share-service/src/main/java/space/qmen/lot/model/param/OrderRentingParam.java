package space.qmen.lot.model.param;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class OrderRentingParam {
    private Date dateBegin;
    private Date dateEnd;
    private Integer periodType;
    private Long renterId;
    private Long spaceId;
    private Long vehicleId;

}
