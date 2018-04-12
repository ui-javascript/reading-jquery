package space.qmen.lot.service;



import space.qmen.lot.dto.*;
import space.qmen.lot.entity.Space;
import space.qmen.lot.param.*;
import space.qmen.lot.vo.CommunitySpaceVO;
import space.qmen.lot.vo.LongSpaceRentingStatusVO;
import space.qmen.lot.vo.SpaceAvailableVO;
import space.qmen.lot.vo.SpaceWeekRentingStatusVO;

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
    List<UCZSInfoDTO> listSpaceByCommunityId(Long id);

    Space getSpaceById(Long id);
    Integer getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam);
    SpaceInfoDTO getSpaceInfoById(Long id);
    // 获取某车位当天的租用状态
    SpaceDayRentingStatusDTO getSpaceDayRentingStatus(SpaceDayRentingStatusParam spaceDayRentingStatusParam);
    SpaceWeekRentingStatusVO getSpaceWeekRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam);

    // 获取长租情况
    LongSpaceRentingStatusVO getSpaceLongRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam);
    SpaceWeekRuleDTO getSpaceRuleBySpaceId(Long id);


    Long saveSpace(SpaceParam space);
    Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam);


    Long updateSpace(Space space);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);
    Long updateUCZSUser(UCZSMatchUserParam uczsMatchUserParam);



    Long deleteSpace(Long id);
}
