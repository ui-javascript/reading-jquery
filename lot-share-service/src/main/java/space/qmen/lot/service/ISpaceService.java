package space.qmen.lot.service;


import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.SaveSpaceParam;
import space.qmen.lot.model.param.WeekRuleParam;

import java.util.List;

public interface ISpaceService {
    List<Space> listSpace();
    Space getSpaceById(Long id);
    Long deleteSpace(Long id);

    Long saveSpace(SaveSpaceParam space);
    Long updateSpace(Space space);

    // 自定义
    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);

}
