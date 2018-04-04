package space.qmen.lot.service;


import space.qmen.lot.model.dto.SpaceDayRentingStatusDTO;
import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.dto.SpaceInfoDTO;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.*;
import space.qmen.lot.model.vo.*;

import java.util.List;
import java.util.Map;

public interface ISpaceService {
    List<Space> listSpace();

    // 某小区的可用车位
    SpaceAvailableVO listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
    CommunitySpaceVO listCommunitySpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
    // 某Area的可用车位
    Map listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam);

    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id);

    Space getSpaceById(Long id);
    Integer getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam);
    SpaceInfoDTO getSpaceInfoById(Long id);
    // 获取某车位当天的租用状态
    SpaceDayRentingStatusDTO getSpaceDayRentingStatus(SpaceDayRentingStatusParam spaceDayRentingStatusParam);
    SpaceWeekRentingStatusVO getSpaceWeekRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam);

    // 获取长租情况
    LongSpaceRentingStatusVO getSpaceLongRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam);

    Long saveSpace(SpaceParam space);
    Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam);


    Long updateSpace(Space space);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);



    Long deleteSpace(Long id);
}
