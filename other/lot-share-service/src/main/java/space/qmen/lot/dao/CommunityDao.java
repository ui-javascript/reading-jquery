package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Community;

import java.util.List;

public interface CommunityDao {
    List<Community> listCommunity();
    Community getCommunityById(@Param("id") Long id);
    Long deleteCommunity(Long id);

    Long saveCommunity(Community community);
    Long updateCommunity(Community community);
}
