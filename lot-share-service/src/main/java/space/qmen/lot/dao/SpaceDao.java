package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.model.dto.SpaceDayRentingStatusDTO;
import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.dto.SpaceInfoDTO;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.*;

import java.util.List;

public interface SpaceDao {

    Space getSpaceById(@Param("id") Long id);
    Long[] getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam);
    SpaceInfoDTO getSpaceInfoById(@Param("id") Long id);
    SpaceDayRentingStatusDTO getSpaceDayRentingStatus(SpaceDayRentingStatusParam spaceDayRentingStatusParam);


    Long saveSpace(SpaceParam space);
    Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam);

    Long deleteSpace(Long id);
    Long deleteSpaceRuleSoftly(Long spaceId);

    Long updateSpace(Space space);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);

    // 自定义
    List<Space> listSpace();
    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(@Param("id") Long id);
    Long[] listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
}
