import { PKG_TYPE, LIB_TEMPLATE_TYPE, APPLICATION_TEMPLATE_TYPE, PKG_TYPES, TEMPLATE_TYPES} from './../config/index'

interface TemplateConfig {
	/**
	 * 应用类型
	 */
	applicationType: PKG_TYPES
	/**
	 * 模版类型
	 */
	type: TEMPLATE_TYPES
	/**
	 * 模版名称
	 */
	name: string
	/**
	 * 模版仓库相关
	 */
	repo: {
		/**
		 * 模版仓库来源
		 */
		origin?: 'gitee' | 'github' | 'gitlab'
		/**
		 * 模版仓库url
		 */
		url: string
		/**
		 * 是否采用 clone 方式下载
		 */
		clone: boolean
		/**
		 * git access token
		 */
		accessToken: string
	}
	/**
	 * 模版下载后的存放目录
	 */
	tmpDir: string
	/**
	 * 模版存放分支
	 */
	branch: string
}

export const templateList: Array<TemplateConfig> = [
	{
		applicationType: 'EMPTY',
		tmpDir: './templates/template-empty',
		type: 'EMPTY_DEFAULT',
		name: LIB_TEMPLATE_TYPE.EMPTY,
		branch: 'main',
		repo: {
			origin: 'github',
			url: 'lexmin0412/youtils-project-templates',
			clone: true,
			accessToken: ''
		}
	},
	{
		applicationType: 'LIB',
		type: 'ROLLUP_TS',
		name: LIB_TEMPLATE_TYPE.ROLLUP_TS,
		repo: {
			origin: 'gitee',
			url: 'https://gitee.com/lexmin0412/rollup-ts-template-hbs.git',
			clone: true,
			accessToken: ''
		},
		branch: 'master',
		tmpDir: './templates/template-rollup-ts',
	}
]
