package space.qmen.lot.entity.param;

import lombok.Data;

@Data
public class WeekRule {
    private Long spaceId;

    private Integer isMonOk;
    private Integer isTueOk;
    private Integer isWedOk;
    private Integer isThurOk;
    private Integer isFriOk;
    private Integer isSatOk;
    private Integer isSunOk;

    private Integer isFestivalOk;

    private Integer status;
}
