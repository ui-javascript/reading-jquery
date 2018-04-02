package space.qmen.lot.model.vo;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.model.entity.Community;

@Accessors(chain = true)
@Data
public class SpaceAvailableVO extends Community {
    private Integer spaceCount;
    private Long[] spaceIdList;
    private Integer level;

    public SpaceAvailableVO() {
        this.spaceCount = 0;
    }
}
