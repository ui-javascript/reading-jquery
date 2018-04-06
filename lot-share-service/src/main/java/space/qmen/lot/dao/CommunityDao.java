package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.model.dto.CommunitySelectDTO;
import space.qmen.lot.model.entity.Community;
import space.qmen.lot.model.entity.CommunityPolicy;
import space.qmen.lot.model.param.CommunityIdsParam;

import java.util.List;

public interface CommunityDao {
    List<Community> listCommunity();
    List<CommunitySelectDTO> listCommunityByOwnerId();
    List<Community> listCommunityByAreaId(Long id);
    Long[] listCommunityIdsByAreaId(Long id);
    Long[] listCommunityIds(CommunityIdsParam communityIdsParam);

    Community getCommunityById(@Param("id") Long id);
    CommunityPolicy getCommunityPolicyById(@Param("id") Long id);

    Long deleteCommunity(Long id);

    Long saveCommunity(Community community);
    Long updateCommunity(Community community);


}
