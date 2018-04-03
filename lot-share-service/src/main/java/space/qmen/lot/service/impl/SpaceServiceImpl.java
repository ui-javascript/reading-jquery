package space.qmen.lot.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.CommunityDao;
import space.qmen.lot.dao.OrderDao;
import space.qmen.lot.dao.SpaceDao;
import space.qmen.lot.model.dto.SpaceDetailsDTO;
import space.qmen.lot.model.entity.Community;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.*;
import space.qmen.lot.model.vo.SpaceAvailableVO;
import space.qmen.lot.service.ISpaceService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SpaceServiceImpl implements ISpaceService {

    private final static Integer LEVEL_LOW_NUM = 20;
    private final static Integer LEVEL_MIDDLE_NUM = 50;
    private final static Integer LEVEL_LOW = 0;
    private final static Integer LEVEL_MIDDLE = 1;
    private final static Integer LEVEL_HIGH = 2;


    @Autowired
    private SpaceDao spaceDao;

    @Autowired
    private CommunityDao communityDao;

    @Autowired
    private OrderDao orderDao;

    @Override
    public List<Space> listSpace(){
        return spaceDao.listSpace();
    }

    @Override
    public Space getSpaceById(Long id) { return spaceDao.getSpaceById(id); }

    @Override
    public Long deleteSpace(Long id) {
        return spaceDao.deleteSpace(id);
    }

    @Override
    public Long saveSpace(SpaceParam space) { return spaceDao.saveSpace(space); }

    @Override
    public Long updateSpace(Space space) { return spaceDao.updateSpace(space); }

    @Override
    public List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id){
        return spaceDao.listSpaceDetailsByOwnerId(id);
    }

    @Override
    public Long updateSpaceRule(WeekRuleParam weekRuleParam) { return spaceDao.updateSpaceRule(weekRuleParam); }

    @Override
    public SpaceAvailableVO listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam){
        SpaceAvailableVO spaceAvailable =  new SpaceAvailableVO();
        Long[] list = spaceDao.listSpaceAvailable(communitySpaceAvailableParam);
        spaceAvailable.setSpaceIdList(list);
        spaceAvailable.setSpaceCount(list.length);
        return spaceAvailable;
    }

    @Override
    public Map listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam){
        List<SpaceAvailableVO> resultList = new ArrayList<>();
        Map result = new HashMap();
        Integer levelLow = 0, levelMiddle = 0, levelHigh = 0;

        try {
            // 当前区域的所有小区
            CommunityIdsParam communityIdsParam = new CommunityIdsParam();
            communityIdsParam.setAreaId(areaSpaceAvailableParam.getAreaId());
            communityIdsParam.setKeyword(areaSpaceAvailableParam.getKeyword());
            Long[] communityIdsArr = communityDao.listCommunityIds(communityIdsParam);

            // 遍历查询各个小区的详情
            for(Long ids : communityIdsArr) {
                CommunitySpaceAvailableParam param = new CommunitySpaceAvailableParam();
                param.setDateBegin(areaSpaceAvailableParam.getDateBegin());
                param.setPeriodType(areaSpaceAvailableParam.getPeriodType());
                param.setCommunityId(ids);

                Long[] list = spaceDao.listSpaceAvailable(param);

                // 查询该小区空车位
                Community community = communityDao.getCommunityById(ids);
                Integer historyNum = orderDao.getOrderHistoryNum(ids);
                SpaceAvailableVO vo = new SpaceAvailableVO();
                BeanUtils.copyProperties(community, vo);
                vo.setSpaceIdList(list)
                  .setSpaceCount(list.length)
                    .setHistoryOrderNum(historyNum);
//
                if (list.length < LEVEL_LOW_NUM) {
                    levelLow++;
                    vo.setLevel(LEVEL_LOW);
                } else if (list.length >= LEVEL_LOW_NUM && list.length <= LEVEL_MIDDLE_NUM ) {
                    levelMiddle++;
                    vo.setLevel(LEVEL_MIDDLE);
                } else {
                    levelHigh++;
                    vo.setLevel(LEVEL_HIGH);
                }

                resultList.add(vo);
            }

        } catch(Exception e) {

        }

        result.put("spaceList", resultList);
        result.put("levelLow", levelLow);
        result.put("levelMiddle", levelMiddle);
        result.put("levelHigh", levelHigh);

        return result;
    }

}
