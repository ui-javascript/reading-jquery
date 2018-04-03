package space.qmen.lot.service;


import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.dto.SpaceInfoDTO;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.AreaSpaceAvailableParam;
import space.qmen.lot.model.param.CommunitySpaceAvailableParam;
import space.qmen.lot.model.param.SpaceParam;
import space.qmen.lot.model.param.WeekRuleParam;
import space.qmen.lot.model.vo.CommunitySpaceVO;
import space.qmen.lot.model.vo.SpaceAvailableVO;

import java.util.List;
import java.util.Map;

public interface ISpaceService {
    List<Space> listSpace();
    Space getSpaceById(Long id);
    SpaceInfoDTO getSpaceInfoById(Long id);
    Long deleteSpace(Long id);

    Long saveSpace(SpaceParam space);
    Long updateSpace(Space space);

    // 自定义
    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);


    // 某小区的可用车位
    SpaceAvailableVO listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
    CommunitySpaceVO listCommunitySpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);

    // 某Area的可用车位
    Map listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam);
}
