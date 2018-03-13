package space.qmen.lot.service;

import space.qmen.lot.domain.Community;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface CommunityService {

    List<Community> findAllCommunity();

    Community findCommunityById(Long id);
    Long saveCommunity(Community community);
    Long updateCommunity(Community community);
    Long deleteCommunity(Long id);
}
