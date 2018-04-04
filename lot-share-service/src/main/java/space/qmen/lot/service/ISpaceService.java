package space.qmen.lot.service;


import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.dto.SpaceInfoDTO;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.*;
import space.qmen.lot.model.vo.CommunitySpaceVO;
import space.qmen.lot.model.vo.SpaceAvailableVO;

import java.util.List;
import java.util.Map;

public interface ISpaceService {
    List<Space> listSpace();
    Space getSpaceById(Long id);
    Integer getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam);
    SpaceInfoDTO getSpaceInfoById(Long id);
    Long deleteSpace(Long id);

    Long saveSpace(SpaceParam space);
    Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam);


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
