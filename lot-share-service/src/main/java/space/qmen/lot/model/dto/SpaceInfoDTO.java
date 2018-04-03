package space.qmen.lot.model.dto;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.model.entity.Space;

@Accessors(chain = true)
@Data
public class SpaceInfoDTO extends Space {
    private String zoneName;
    private String ownerName;
    private String ownerTel;
}
