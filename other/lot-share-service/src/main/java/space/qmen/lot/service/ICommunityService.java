package space.qmen.lot.service;

import space.qmen.lot.entity.Community;

import java.util.List;

public interface ICommunityService {
    List<Community> listCommunity();
    Community getCommunityById(Long id);
    Long deleteCommunity(Long id);

    Long saveCommunity(Community zone);
    Long updateCommunity(Community zone);
}
