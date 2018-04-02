package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.AreaSpaceAvailableParam;
import space.qmen.lot.model.param.CommunitySpaceAvailableParam;
import space.qmen.lot.model.param.SpaceParam;
import space.qmen.lot.model.param.WeekRuleParam;

import java.util.List;

public interface SpaceDao {
    List<Space> listSpace();
    Space getSpaceById(@Param("id") Long id);
    Long deleteSpace(Long id);

    Long saveSpace(SpaceParam space);
    Long updateSpace(Space space);

    // 自定义
    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(@Param("id") Long id);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);
    Long[] listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
}
