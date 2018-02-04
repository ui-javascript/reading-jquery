package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.domain.Community;
import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface CommunityDao {

    List<Community> findAllCommunity();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Community findById(@Param("id") Long id);
    Long saveCommunity(Community community);
    Long updateCommunity(Community community);
    Long deleteCommunity(Long id);
}