package space.qmen.lot.model.param;

/**
 * 获取当前可用车位数
 */

import lombok.Data;


@Data
public class CommunitySpaceAvailableParam extends SpaceAvailableParam {
    private long communityId;
}
