package space.qmen.lot.service;

import space.qmen.lot.model.dto.CommunitySelectDTO;
import space.qmen.lot.model.entity.Community;

import java.util.List;

public interface ICommunityService {
    List<Community> listCommunity();
    Community getCommunityById(Long id);
    Long deleteCommunity(Long id);

    Long saveCommunity(Community zone);
    Long updateCommunity(Community zone);

    // 自定义接口
    List<CommunitySelectDTO> listCommunityByOwnerId();
    List<Community> listCommunityByAreaId(Long id);
}
