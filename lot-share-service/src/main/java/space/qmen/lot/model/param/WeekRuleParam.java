package space.qmen.lot.model.param;

import lombok.Data;

@Data
public class WeekRuleParam {
    private Long spaceId;

    private Integer isMonOk;
    private Integer isTueOk;
    private Integer isWedOk;
    private Integer isThurOk;
    private Integer isFriOk;
    private Integer isSatOk;
    private Integer isSunOk;

    private Integer isMorningOk;
    private Integer isAfternoonOk;

    private Integer isFestivalOk;

    private Integer status;
}
